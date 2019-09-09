---
layout: default
type: post
category: development
title:  "Kafka Basic"
subtitle: "카프카 실행, 토픽 및 간단한 실행"
tag: "kafka"
date: "2019-09-09"
---


## 실행
### 주키퍼 실행
카프카 설치 디렉토리에서 다음 명령 실행
```
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
정상적으로 실행되면 다음 로그 출력
```log
[2019-09-09 11:47:02,030] INFO binding to port 0.0.0.0/0.0.0.0:2181 (org.apache.zookeeper.server.NIOServerCnxnFactory)
```

### 카프카 실행
카프카 설치 디렉토리에서 다음 명령 실행
```
$ bin/kafka-server-start.sh config/server.properties
```
정상적으로 실행되면 다음 로그 출력
```log
[2019-09-09 11:38:39,855] INFO [/config/changes-event-process-thread]: Starting (kafka.common.ZkNodeChangeNotificationListener$ChangeEventProcessThread)
[2019-09-09 11:38:39,873] INFO [SocketServer brokerId=0] Started data-plane processors for 1 acceptors (kafka.network.SocketServer)
[2019-09-09 11:38:39,890] INFO Kafka version: 2.2.0 (org.apache.kafka.common.utils.AppInfoParser)
[2019-09-09 11:38:39,890] INFO Kafka commitId: 05fcfde8f69b0349 (org.apache.kafka.common.utils.AppInfoParser)
[2019-09-09 11:38:39,904] INFO [KafkaServer id=0] started (kafka.server.KafkaServer)
```


## 토픽
### 토픽 관리
토픽 생성하기 위해 다음 명령 수행
```
$ bin/kafka-topics.sh -create -zookeeper [zookeeper host]:[zookeeper port] --replication-factor [rf number] --partitions [num of partitions] --topic [topic name]

# 예시
$ bin/kafka-topics.sh -create -zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic topictest

Created topic topictest.
```

### 토픽 확인
생성된 토픽 리스트 확인
```
$ bin/kafka-topics.sh --list --zookeeper [zookeeper host]:[zookeeper port]

# 예시
$ bin/kafka-topics.sh --list --zookeeper localhost:2181
topictest
...
```

### 토픽 삭제
지정한 토픽을 삭제
```
$ bin/kafka-topics.sh --delete --zookeeper [zookeeper host]:[zookeeper port] --topic [topic name]

# 예시
$ bin/kafka-topics.sh --delete --zookeeper localhost:2181 --topic topictest

Topic topictest is marked for deletion.
Note: This will have no impact if delete.topic.enable is not set to true.
```

## 메세징
### Producer 실행
```
$ bin/kafka-console-producer.sh --broker-list [kafka host]:[kafka port] --topic [topic name]
> [Kafka Server에 특정 토픽으로 전송할 메세지 입력]

# 예시
$ bin/kafka-console-producer.sh --broker-list localhost:9092 --topic topicname
> message
```

### Consumer 실행
```
$ bin/kafka-console-consumer.sh --bootstrap-server [kafka host]:[kafka port] --topic [topic name] --from-beginning
> [Kafka Server에서 해당 토픽의 메세지를 가져옴]

# 예시
$ bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topictest --from-beginning
> message
```
