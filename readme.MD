# About

The code for the <https://nastojte.cz> site.

## Webpack 5

`npm run build` does not work on WIndows due to Prerender SPA plugin rewriting index.html. Docker container must be used to build the web locally.

When using already prepared docker container:

+ Run intractively
+ Then in shell in the container:

```sh
cd /root/nastojte-cz
git pull
npm i
npm run build
http-server dist
```

+ Visit `http://localhost:8080` on local machine

## Creating docker container

+ On host: `docker build -t "nastojtewebpackfive:Dockerfile" .`
+ Then in interactive shell in the container (this can't be automated as each of the RUN commands in Dockerfile runs in a new shell so ssh agent won't keep runing):

```sh
apt update
apt install --assume-yes libx11-xcb1 libasound2 x11-apps libice6 libsm6 libxaw7 libxft2 libxmu6 libxpm4 libxt6 x11-apps xbitmaps x11-common libxcomposite1 libxdamage1 chromium libxss1
mkdir /root/.ssh
cd /root/.ssh
echo "<PRIVATE KEY>" > id_rsa
cd /root
chmod 700 -R ~/.ssh
ssh-add ~/.ssh/id_rsa
git clone git@github.com:oookoook/nastojte-cz.git
npm i -g http-server
```

+ Then continue with normal process as above - `git pull` etc.

Full list of `apt install` commands:

```sh
apt install --assume-yes libx11-xcb1 libasound2 x11-apps libice6 libsm6 libxaw7 libxft2 libxmu6 libxpm4 libxt6 x11-apps xbitmaps x11-common libxcomposite1 libxdamage1 chromium libxss1
```

## Notes

+ <http://blog.pixelastic.com/2017/09/12/importing-iframe-with-webpack-and-vue-js/>
+ <https://itnext.io/vue-js-and-webpack-4-from-scratch-part-2-5038cc9deffb>
+ Obsolete: <https://gist.github.com/jlouros/9abc14239b0d9d8947a3345b99c4ebcb#file-aws-upload-folder-to-s3-js>
+ How to make CloudFront not to cache index.html (the last response) <https://stackoverflow.com/questions/45727454/how-to-make-cloudfront-never-cache-index-html-on-s3-bucket/45734248#45734248>
