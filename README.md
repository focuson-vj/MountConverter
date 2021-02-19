# MountConverter
Firestoreのデータをリアルタイムに取得し、OSCを利用してデータを吐き出すインタフェース

## Description
- Firestoreからリアルタイムにデータを受信し、受け取ったデータを変換しOSCに乗せて送信するプロキシサーバです。
- Firebaseサービスアカウント情報とOSCの受信先さえあればどなたでも利用できます。

## Requirements
- Node.js
- TypeScript
- tsc
- ts-node

## How to use
1. /app/config.json へOSCメッセージの送信先を設定する
2. `$ ts-node app.ts` を実行してサーバ立ち上げ

## Contribution
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Licence
MIT

## Author
Focus On! VJ Team