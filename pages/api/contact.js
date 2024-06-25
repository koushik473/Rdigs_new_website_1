import fs from "fs";
import path from "path";
import { parse } from "json2csv";
import requestIp from "request-ip";
import geoip from "geoip-lite";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, companyName, jobTitle, message } = req.body;

    // Basic validation - check if required fields are provided
    if (!username || !email || !companyName || !jobTitle || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Capture IP address of the user
    const ipAddress = requestIp.getClientIp(req);

    // Use geoip-lite to get approximate location based on IP (city and country)
    const geo = geoip.lookup(ipAddress);
    const userLocation = geo ? `${geo.city}, ${geo.country}` : "Unknown";

    // Prepare data to write to CSV
    const formData = {
      username,
      email,
      companyName,
      jobTitle,
      message,
      ipAddress,
      location: userLocation,
      timestamp: new Date().toISOString(),
    };

    // Define path to CSV file
    const filePath = path.join(
      process.cwd(),
      "data",
      "contact-form-submissions.csv",
    );

    // Convert form data to CSV format
    const csv = parse(formData, { header: !fs.existsSync(filePath) });

    // Append data to CSV file
    fs.appendFile(filePath, csv + "\n", (err) => {
      if (err) {
        console.error("Error appending to CSV file:", err);
        res.status(500).json({ message: "Error saving form data" });
      } else {
        console.log("Form data saved successfully");
        res.status(200).json({ message: "Form submission successful" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
