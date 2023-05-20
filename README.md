# React Native Android JSON Server Localhost Network Error Fix!

<p align="center">
  <img src="https://i.ytimg.com/vi/b4fvPUXGETo/maxresdefault.jpg" width="100%" height="45%" title="REACT NATİVE JSON SERVER">
</p>

# react-native-json-server-android-ngrok

React Native Android JSON Server localhost çalıştırmayı anlattığım uygulamayı sizlerle paylaştım.

Basitçe şu şekilde anlatayım :

Script package.json dosyasına ekleyin

"db": "json-server -w db.json",
"tunnel": "ngrok http 3000"

ngrok paketini projesinize yükleyin.

yarn yada npm run tunnel deyin ardından size yönlendirilmiş forwadding bir tane url verecektir.

Artık isteği localhost yerine bu verilen url göre yapacaksınız.

const baseUrl =
    Platform.OS === 'android'
      ? 'https://b9ec-95-70-175-97.eu.ngrok.io'
      : 'http://localhost:3000/';
      
      
useEffect(() => {
  axios.get(`${baseUrl}/posts/1`).then(response => {
    console.log(response.data);
  });
}, []);

https://www.linkedin.com/in/furkanturkyilmaz/
