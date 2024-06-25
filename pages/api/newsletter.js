import fs from "fs";
import path from "path";
import { parse } from "json2csv";
import requestIp from "request-ip";
import geoip from "geoip-lite"; // Assuming you have geoip-lite installed

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Basic validation - check if email is provided and valid
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Check if email is already subscribed (simulated array for demo purposes)
    const subscribers = []; // Replace with database query in real scenario

    if (subscribers.includes(email)) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    // Capture IP address of the user
    const ipAddress = requestIp.getClientIp(req);

    // Use geoip-lite to get approximate location based on IP (city and country)
    const geo = geoip.lookup(ipAddress);
    const userLocation = geo ? `${geo.city}, ${geo.country}` : "Unknown";

    // Prepare data to write to CSV
    const formData = {
      email,
      timestamp: new Date().toISOString(),
      ipAddress,
      location: userLocation,
    };

    // Define path to CSV file
    const filePath = path.join(
      process.cwd(),
      "data",
      "newsletter-subscribers.csv",
    );

    // Convert form data to CSV format
    const csv = parse(formData, { header: !fs.existsSync(filePath) });

    // Append data to CSV file
    fs.appendFile(filePath, csv + "\n", (err) => {
      if (err) {
        console.error("Error appending to CSV file:", err);
        res.status(500).json({ message: "Error saving subscriber data" });
      } else {
        console.log("Subscriber data saved successfully");
        res
          .status(200)
          .json({ message: "Successfully subscribed to newsletter" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
