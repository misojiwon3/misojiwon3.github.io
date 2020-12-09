---
layout: default
type: post
category: etc
title:  "macOS Rootless"
subtitle: "macOS System Integrity Protection (SIP)"
tag: "macOS"
date: "2019-04-21"
---

### Rootless?
* macOS System Integrity Protection (SIP)
* OS X 10.11 El Capitan 부터 도입된 새로운 보안기능
* 사용자나 응용 프로그램이 시스템 영역의 파일을 삭제하거나 변조할 수 없도록 '커널 레벨'에서 파일을 잠그는 기능
* 사용자가 관리자 권한을 가지고 있더라도 시스템 파일을 마음대로 건드릴 수 없도록 차단

![rootless_platform_policy](/images/etc/2019-04-21-macos-rootless/platform_policy.jpg)
<figcaption>Rootless가 보호하는 영역</figcaption>

### Rootless의 장단점
Rootless가 enable 일 때 위 디렉토리 영역에 ls, mv, cp 등의 작업을 시도한다면, root 권한을 가지고 있더라도 `Operation not permitted`라는 경고문을 띄우며 작업을 거부합니다. 이는 원치 않는 작업을 외부 요인들로부터 차단함으로써 사용자가 본인의 PC 환경을 안전한 상태로 유지시킬 수 있도록 합니다.  
하지만 macOS의 장점인 Customizing 에 여러 제약이 발생할 수 있으며 System Level에 접근하는 응용프로그램들(Bluestack, Parallels 등)의 기능마저도 제한될 수 있다는 단점도 있습니다.

### Rootless 비활성화/활성화 방법
1. 맥 종료 후 재시작
2. 재시작 되는 과정에서 ⌘+R 버튼을 눌러 복구모드로 진입
3. 복구 모드의 메뉴막대에서 `유틸리티 > 터미널` 실행
![rootless](/images/etc/2019-04-21-macos-rootless/macos.jpg)
4. 터미널에 다음을 입력하여 SIP 기능을 비활성화 시킨 후 reboot
```bash
$ csrutil disable
$ reboot
```
5. 다시 SIP 기능을 활성화 하려면 다음을 입력
```bash
$ csrutil enable
```
6. 상태 확인
```bash
$ csrutil status
System Integrity Protection status: disabled.
```

### Rootless 비활성화 상태에서 제어
비활성화 방식과는 달리 Rootless가 비활성 상태라면 정상 부팅 환경에서 활성화 가능

1. 터미널 실행 후 다음 입력
```bash
$ sudo /usr/bin/csrutil clear
Successfully cleared System Integrity Protection. Please restart the machine for the changes to take effect.
```
2. 입력 후 재시동 하면 SIP 기능 활성화
```bash
$ csrutil status
System Integrity Protection status: enabled.
```
