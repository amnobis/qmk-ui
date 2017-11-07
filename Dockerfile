FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install --no-install-recommends -y build-essential \
    gcc \
    unzip \
    wget \
    zip \
    gcc-avr \
    binutils-avr \
    avr-libc \
    dfu-programmer \
    dfu-util \
    gcc-arm-none-eabi \
    binutils-arm-none-eabi \
    libnewlib-arm-none-eabi \
    git

RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

VOLUME /qmk
WORKDIR /qmk
CMD make clean; make keyboard=${keyboard} subproject=${subproject} keymap=${keymap}
