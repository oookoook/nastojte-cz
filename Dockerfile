# specify the node base image with your desired version node:<version>
FROM node:16

RUN mkdir ~/.ssh
COPY .ssh/* ~/.ssh/
RUN chmod 700 -R ~/.ssh
#RUN eval "$(ssh-agent -s)"
#RUN ssh-add ~/.ssh/id_rsa
#RUN cd ~
#RUN git clone git@github.com:oookoook/nastojte-cz.git
#RUN cd nastojte-cz
#RUN npm i

ENTRYPOINT [ "/bin/bash" ]

# replace this with your application's default port
EXPOSE 8080