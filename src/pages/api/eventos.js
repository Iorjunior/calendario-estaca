import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function (req, res) {
  const doc = new GoogleSpreadsheet(
    process.env.SHEET_ID
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows();
  
  const eventos = rows.map(({id, evento, mes, dia, hora, descricao, organizacao}) =>{
      return {
        id,
        evento,
        mes,
        dia,
        hora,
        descricao,
        organizacao
      };
  })
  
  res.setHeader('Cache-Control','s-maxage=60, stale-while-revalidate')

  res.send({
    title: doc.title,
    eventos,
  });
}
