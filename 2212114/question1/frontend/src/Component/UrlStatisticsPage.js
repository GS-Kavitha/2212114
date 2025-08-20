import React from "react";

function UrlStatisticsPage({ urls }) {
  return (
    <div className="page">
      <h2>URL Statistics</h2>
      {urls.length === 0 ? (
        <p>No URLs created yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Short URL</th>
              <th>Original URL</th>
              <th>Expiry</th>
              <th>Total Clicks</th>
              <th>Click Data</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, index) => (
              <tr key={index}>
                <td>{url.shortcode}</td>
                <td>{url.longUrl}</td>
                <td>{url.expiry.toLocaleString()}</td>
                <td>{url.clicks.length}</td>
                <td>
                  {url.clicks.length > 0 ? (
                    <ul>
                      {url.clicks.map((c, i) => (
                        <li key={i}>
                          {c.timestamp} | {c.source} | {c.location}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "No clicks yet"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UrlStatisticsPage;
