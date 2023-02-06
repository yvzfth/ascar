// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

var base: string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ base64: string }>
) {
  if (req.method === 'POST') {
    base = req.body.base64;
    res.send({ base64: base });
  } else res.status(200).send({ base64: 'hello' });
}
