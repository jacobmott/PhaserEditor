# These are phaser editor experiments:
**-**: ...











## AWS S3 Screenshots And videos folders (Syncing/Pull/Push to)

<details>
The Screenshots for this github and some videos) folder is stored in s3 bucket
Pull down from bucket
  
```
  aws s3 cp --recursive s3://<bucket>/PhaserEditor/Assets PhaserEditor/Assets
  aws s3 cp --recursive s3://<bucket>/PhaserEditor/Screenshots PhaserEditor/Screenshots 
```

Push to bucket
```
  aws s3 cp --recursive PhaserEditor/Assets s3://<bucket>/PhaserEditor/Assets
  aws s3 cp --recursive PhaserEditor/Screenshots s3://<bucket>/PhaserEditor/Screenshots
```

Or just do a sync
```
  aws s3 sync PhaserEditor/Assets s3://<bucket>/PhaserEditor/Assets --delete
  aws s3 sync PhaserEditor/Screenshots s3://<bucket>/PhaserEditor/Screenshots --delete

```
</details>
