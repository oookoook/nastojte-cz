# specify the node base image with your desired version node:<version>
FROM node:18

ENTRYPOINT [ "/bin/bash" ]

# replace this with your application's default port
EXPOSE 8080