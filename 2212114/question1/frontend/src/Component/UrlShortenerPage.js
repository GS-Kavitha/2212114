import React, { useState } from "react";

function generateShortCode() {
  return Math.random().toString(36).substring(2, 7);
}

function UrlShortenerPage({ urls, setUrls }) {
  const [inputs, setInputs] = useState([{ longUrl: "", validity: "", shortcode: "" }]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const addInput = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { longUrl: "", validity: "", shortcode: "" }]);
    }
  };

  const handleSubmit = () => {
    const newUrls = inputs.map((input) => {
      if (!input.longUrl) return null;

      const validity = input.validity ? parseInt(input.validity) : 30;
      const shortcode = input.shortcode || generateShortCode();
      const expiry = new Date(Date.now() + validity * 60000);

      return {
        longUrl: input.longUrl,
        shortcode,
        expiry,
        clicks: []
      };
    }).filter(Boolean);

    setUrls([...urls, ...newUrls]);
    setInputs([{ longUrl: "", validity: "", shortcode: "" }]);
  };

  return (
    <div className="page">
      <h2>URL Shortener</h2>
      {inputs.map((inp, index) => (
        <div key={index} className="input-block">
          <input
            type="text"
            placeholder="Enter long URL"
            value={inp.longUrl}
            onChange={(e) => handleChange(index, "longUrl", e.target.value)}
          />
          <input
            type="number"
            placeholder="Validity (mins, default 30)"
            value={inp.validity}
            onChange={(e) => handleChange(index, "validity", e.target.value)}
          />
          <input
            type="text"
            placeholder="Custom shortcode (optional)"
            value={inp.shortcode}
            onChange={(e) => handleChange(index, "shortcode", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addInput}>+ Add Another URL</button>
      <button onClick={handleSubmit}>Generate Short Links</button>

      <div className="results">
        <h3>Generated Links</h3>
        {urls.map((url, index) => (
          <p key={index}>
            <b>{url.shortcode}</b> → {url.longUrl}  
            (expires: {url.expiry.toLocaleString()})
          </p>
        ))}
      </div>
    </div>
  );
}

export default UrlShortenerPage;
