---
layout: default
type: post
category: development
title:  "Scala Test"
subtitle: "다양한 스타일의 테스트를 제공하는 scalatest "
tag: "scala"
date: "2019-07-26"
---

### Testing Styles

#### FunSuite
* xUnit과 유사한 형태
* test 이름들을 서술적으로 작성하여 집중도가 높으며 Communication에 용이  

```scala
class SetSuite extends FunSuite {
  test("An empty Set should have size 0") {
    assert(Set.empty.size == 0)
  }

  test("Invoking head on an empty Set should produce NoSuchElementException") {
    assertThrows[NoSuchElementException] {
      Set.empty.head
    }
  }
}
```
#### FlatSpec
* xUnit과 일부 유사한 면이 있음
* 필요한 동작을 지정하는 문장과 테스트 블록으로 구성
* 문장에는 `A Stack`과 같은 제목이 필요하며 동사는 `should`, `must`, `can` 등이 사용됨

```
"A Stack" should "pop values in last-in-first-out order"
```

* 동일 주제에 대해 여러 테스트를 진행하고자 할 경우 `it`을 사용

```
it should "throw NoSuchElementException if an empty stack is popped"
```

* 문장의 뒤에는 `in`을 추가
* 테스트 이름이 `X should Y`, `A must B` 등으로 표현되어야 함  

```scala
class SetSpec extends FlatSpec {
  "An empty Set" should "have size 0" in {
    assert(Set.empty.size == 0)
  }

  it should "produce NoSuchElementException when head is invoked" in {
    assertThrows[NoSuchElementException] {
      Set.empty.head
    }
  }
}
```

#### FunSpec
* Ruby의 RSpec tool과 유사
* 중첩과 구조적 텍스트(describe, it)를 사용

```scala
class SetSpec extends FunSpec {
  describe("A Set") {
    describe("when empty") {
      it("should have size 0") {
        assert(Set.empty.size == 0)
      }

      it("should produce NoSuchElementException when head is invoked") {
        assertThrows[NoSuchElementException] {
          Set.empty.head
        }
      }
    }
  }
}
```

#### WordSpec
* specs or specs2와 유사
* 매우 규격적인 텍스트를 요구함

```scala
class SetSpec extends WordSpec {
  "A Set" when {
    "empty" should {
      "have size 0" in {
        assert(Set.empty.size == 0)
      }

      "produce NoSuchElementException when head is invoked" in {
        assertThrows[NoSuchElementException] {
          Set.empty.head
        }
      }
    }
  }
}
```

#### FreeSpec
```scala
class SetSpec extends FreeSpec {

  "A Set" - {
    "when empty" - {
      "should have size 0" in {
        assert(Set.empty.size == 0)
      }

      "should produce NoSuchElementException when head is invoked" in {
        assertThrows[NoSuchElementException] {
          Set.empty.head
        }
      }
    }
  }
}
```

#### PropSpec
```scala
class SetSpec extends PropSpec with TableDrivenPropertyChecks with Matchers {
  val examples =
    Table(
      "set",
      BitSet.empty,
      HashSet.empty[Int],
      TreeSet.empty[Int]
    )

  property("an empty Set should have size 0") {
    forAll(examples) { set =>
      set.size should be (0)
    }
  }

  property("invoking head on an empty set should produce NoSuchElementException") {
    forAll(examples) { set =>
       a [NoSuchElementException] should be thrownBy { set.head }
    }
  }
}
```


### Base Class 지정
* ScalaTest는 테스트에 필요한 trait들을 mix한 abstract base class를 프로젝트 내에 생성할 것을 권장

```scala
package com.mycompany.myproject

import org.scalatest._

abstract class UnitSpec extends FlatSpec with Matchers with
  OptionValues with Inside with Inspectors
```
기본 클래스를 토대로 특성에 맞는 테스트 클래스를 작성한다.
(e.g. ActorSysSpec, DBSpec, etc)
```scala
class DBSpec extends UnitSpec {
	// some test codes ...
}
```

### Run 
```
# with jar file
scalac -cp scalatest-app_2.12.4-3.0.5.jar StackSpec.scala

# with Simple Runner
scala -cp scalatest-app_2.12.4-3.0.5.jar org.scalatest.run StackSpec

# with ScalaTest shell
scala -cp scalatest_2.12.4-3.0.5.jar
```
