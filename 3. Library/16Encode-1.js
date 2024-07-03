{
  const url = "http://www.contoh.com/?name=Eko Kurniawan Khannedy";
  console.info(url);

  const encoded = encodeURI(url);
  console.info(encoded);

  const decoded = decodeURI(encoded);
  console.info(decoded);
}

{
  const value = "Eko&Kurniawan=Khannedy";
  const url = "http://www.contoh.com/?name=";

  const encoded = encodeURIComponent(value);
  console.info(url + encoded);

  const decoded = decodeURIComponent(encoded);
  console.info(url + decoded);
}
