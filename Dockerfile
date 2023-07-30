FROM reactnativecommunity/react-native-android

WORKDIR /app

COPY . .

RUN npm ci

RUN cd ./android

RUN chmod +x gradlew

RUN ./gradlew assembleRelease