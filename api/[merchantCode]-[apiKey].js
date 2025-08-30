// File: api/[merchantCode]-[apiKey].js

module.exports = (req, res) => {
  // Dapatkan parameter merchantCode dan apiKey dari query string Vercel
  // (Vercel secara otomatis mengekstrak ini dari nama file)
  const { merchantCode, apiKey } = req.query;

  // Anda bisa menggunakan merchantCode dan apiKey di sini untuk validasi atau logika lainnya
  // Contoh: if (merchantCode !== 'xxxx') { ... }

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
    }
  ];

  // Kirim respons JSON
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    "status": "success",
    "data": dummyData
  }));
};
