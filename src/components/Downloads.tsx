import { useEffect, useState } from "react"
import axios from "axios";

const Downloads = () => {
    const [downloads, setDownloads] = useState(335);

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const endDate = `${year}-${month}-${day}`;
    const StartDate = '2023-05-01'
    const packageName = 'tarminal-chat-app'

    useEffect(() => {

        const fetchPackageDownloads = async () => {
            try {
                // Fetch data from the npm API
                const response = await axios.get(`https://api.npmjs.org/downloads/range/${StartDate}:${endDate}/${packageName}`);

                // Extract downloads array from the response
                const downloadsArray = response.data.downloads;

                // Calculate total downloads by summing up 'downloads' values
                const totalDownloads = downloadsArray.reduce((sum: number, entry: { downloads: number }) => sum + entry.downloads, 0);

                // Update the state with the total downloads
                setDownloads(totalDownloads);
            } catch (error) {
                if (error instanceof Error)
                    console.error('Error fetching package downloads:', error.message);
            }
        };

        // Call the function to fetch data when the component mounts
        fetchPackageDownloads();

    }, [endDate])

    return (
        <div className="downloads bg-[#cafc010f] font-bold text-xl text-center rounded p-4 leading-8 mt-2 border-dashed border-2 text-[#CBFC01] border-[#CBFC01]">
            {downloads} NPM Downloads
        </div>
    )
}

export default Downloads