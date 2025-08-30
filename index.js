// File: index.js

module.exports = (req, res) => {
  // Tentukan path yang diinginkan untuk API Anda
  const apiPath = '/api/mutasi/qris/';

  // Periksa apakah URL permintaan cocok dengan path yang telah ditentukan
  if (req.url.startsWith(apiPath)) {
    // Anda dapat mengekstrak parameter dari URL jika diperlukan
    const urlParts = req.url.split('/');
    const merchantCode = urlParts[4];
    const apiKey = urlParts[5];

    // Data dummy yang akan dikembalikan sebagai respons JSON
    const dummyData = [
      {
        "date": "2024-07-03 22:38:07",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099752",
        "buyer_reff": "266372099752",
        "balance": "1893938"
      },
      {
        "date": "2024-07-03 19:08:06",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099751",
        "buyer_reff": "266372099751",
        "balance": "1881029"
      },
      {
        "date": "2024-07-03 19:07:31",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099750",
        "buyer_reff": "266372099750",
        "balance": "1868120"
      },
      {
        "date": "2024-07-03 18:53:51",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099748",
        "buyer_reff": "266372099748",
        "balance": "1842302"
      },
      {
        "date": "2024-07-03 18:53:04",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099747",
        "buyer_reff": "266372099747",
        "balance": "1829393"
      },
      {
        "date": "2024-07-03 18:52:24",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099746",
        "buyer_reff": "266372099746",
        "balance": "1816484"
      },
      {
        "date": "2024-07-03 18:50:43",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099745",
        "buyer_reff": "266372099745",
        "balance": "1803575"
      },
      {
        "date": "2024-07-03 18:48:22",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099744",
        "buyer_reff": "266372099744",
        "balance": "1790666"
      },
      {
        "date": "2024-07-03 18:35:42",
        "amount": "13000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099743",
        "buyer_reff": "266372099743",
        "balance": "1777757"
      },
      {
        "date": "2024-07-03 14:31:35",
        "amount": "11000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099741",
        "buyer_reff": "266372099741",
        "balance": "1764848"
      },
      {
        "date": "2024-07-03 14:06:33",
        "amount": "10000",
        "type": "CR",
        "qris": "static",
        "brand_name": "93600014",
        "issuer_reff": "266372099740",
        "buyer_reff": "266372099740",
        "balance": "1753925"
      },
      {
        "date": "2024-07-02 19:59:01",
        "amount": "1000",
        "type": "DB",
        "qris": "-",
        "brand_name": "Pencairan QRIS",
        "issuer_reff": "Admin",
        "buyer_reff": "11719925141",
        "balance": "1743995"
      }
    ];

    // Atur header respons dan kirim data JSON
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({
      "status": "success",
      "data": dummyData
    }));

  } else {
    // Jika URL tidak cocok, kirim respons 404 Not Found
    res.status(404).send(JSON.stringify({
      "status": "error",
      "message": "Endpoint not found"
    }));
  }
};
