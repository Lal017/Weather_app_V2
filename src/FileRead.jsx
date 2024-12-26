import { useEffect, useState } from 'react';

// Returns an array with city names in each element
const FileRead = () =>
{
    const [fileText, setFileText] = useState('');
    const [error, setError] = useState();

    useEffect(() => {
        const fetch_content = async () => {
            try {                                               // try to run block of code
                const response = await fetch('/City.txt');      // fetch text file
                if(!response.ok) {                              // if response failed
                    throw new Error('Network response failed'); // throw error
                }
                const text = await response.text();             // get text
                setFileText(text);                              // set text
            }
            catch(error) {
                setError(error.message);                        // set error
                console.error('Error fetching file: ', error);  // display error message
            }
        };

        fetch_content();                                         // call fetch function
    }, []);                                                     // empty array = runs once

    const textArray = fileText.split('\n');

    return textArray;
}; 

export default FileRead;