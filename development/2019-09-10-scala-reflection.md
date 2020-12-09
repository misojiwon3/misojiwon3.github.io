---
layout: default
type: post
category: development
title:  "Scala Reflection"
subtitle: "스칼라 리플렉션"
tag: "scala"
date: "2019-09-10"
---


## Symbol

클래스 명, 메소드 명 등 정의하고 이름을 지정할 수 있는 모든 것들이 해당  
엔티티 : class, object, trait  
멤버 : val, var, def  

###  Symbol의 구조
Symbol은 계층 구조로 구성
* 메소드의 파라미터는 메소드의 하위 계층
* 클래스의 메소드는 클래스의 하위 계층
* 패키지의 클래스는 패키지의 하위 계층
* 최상위 엔티티와 같이 상위 계층이 없다면 NoSymbol 

#### TypeSymbols
type, class, trait, type parameters 등의 선언을 표현  
ClassSymbol : class, trait 등 선언된 모든 정보에 접근 가능  

#### TermSymbols
val, var, def, object, package 등의 선언을 표현
MethodSymbol : 메소드가 생성자인지 가변길이 파라미터를 지원하는 함수인지 확
ModuleSymbol : 멤버 moduleClass를 통해 객체 정의와 암시 적으로 연결된 클래스를 조회 가능  

### Symbol 변환
일반적인 Symbol을 보다 구체적인 Symbol로 변환할 수 있음
(asClass, asMethod 등)

```scala
scala> import scala.reflect.runtime.universe._
import scala.reflect.runtime.universe._

scala> class C[T] { def test[U](x: T)(y: U): Int = ??? }
defined class C

scala> val testMember = typeOf[C[Int]].member(TermName("test"))
testMember: reflect.runtime.universe.Symbol = method test

scala> testMember.asMethod
res0: reflect.runtime.universe.MethodSymbol = method test
```


## Types
Symbol의 type에 대한 정보를 나타냄

### 인스턴스화 Types
Type을 인스턴스화 하는데에는 세 가지 방법이 존재
	1. typeOf 메소드 사용
```scala
scala> typeOf[List[Int]]
res1: reflect.runtime.universe.Type = scala.List[Int]

# 아래와 같은 메소르를 생성하여 지정된 타입이 아닌 인스턴스를 통해 직접 type을 얻을 수 있음
scala>  def getType[T: TypeTag](obj: T) = typeOf[T]
getType: [T](obj: T)(implicit evidence$1: reflect.runtime.universe.TypeTag[T])reflect.runtime.universe.Type

scala> getType(List(1,2,3))
res2: reflect.runtime.universe.Type = List[Int]

scala> class Animal; class Cat extends Animal
defined class Animal
defined class Cat

scala> val a = new Animal
a: Animal = Animal@325236f5

scala> getType(a)
res3: reflect.runtime.universe.Type = Animal

scala> val c = new Cat
c: Cat = Cat@313a3af8

scala> getType(c)
res4: reflect.runtime.universe.Type = Cat
```
	2. 기본 타입 사용
```scala
scala> import scala.reflect.runtime.universe
import scala.reflect.runtime.universe

scala> val intTpe = universe.definitions.IntTpe
intTpe: scala.reflect.runtime.universe.Type = Int
```

## Tree
Scala Refletion에서 tree를 생성하거나 사용하는 API는 다음 세 가지가 있다
	1. tree를 사용하여 arguments를 나타내는 Scala Annotations는 `Annotation.scalaArgs`에 표현
	2. expression로 AST를 리턴하는 `reify`라는 메소드 사용
	3. 매크로를 사용한 Compile-time reflection 및 툴박스를 사용한 runtime compile은 트리를 프로그램 표현 매체로 사용
 
트리의 종류
	1. TermTree
	2. TypTree
	3. SymTree

### Tree 검사
show 메소드를 사용하여 tree에 의해 표현되는 scala 슈도코드 출력
```scala
scala> import scala.reflect.runtime.universe._
import scala.reflect.runtime.universe._

scala> val tree = Apply(Select(Ident(TermName("x")), TermName("$plus")), List(Literal(Constant(2))))
tree: reflect.runtime.universe.Apply = x.$plus(2)

scala> show(tree)
res50: String = x.$plus(2)

scala> tree.toString
res51: String = x.$plus(2)
```

showRaw 메소드를 사용하여 raw internal tree를 볼 수 있음
```scala
scala> val expr = reify { class Flower { def name = "Rose" } }
expr: reflect.runtime.universe.Expr[Unit] =
Expr[Unit]({
  class Flower extends AnyRef {
    def <init>() = {
      super.<init>();
      ()
    };
    def name = "Rose"
  };
  ()
})
```
여기서 `reify`는 Scala expression을 가져와서 Scala Expr를 반환하며 Tree와 TypeTag를 래핑

```scala
scala> val tree = expr.tree
tree: reflect.runtime.universe.Tree =
{
  class Flower extends AnyRef {
    def <init>() = {
      super.<init>();
      ()
    };
    def name = "Rose"
  };
  ()
}

scala> showRaw(tree)
res61: String = Block(List(ClassDef(Modifiers(), TypeName("Flower"), List(), Template(List(Ident(TypeName("AnyRef"))), noSelfType, List(DefDef(Modifiers(), termNames.CONSTRUCTOR, List(), List(List()), TypeTree(), Block(List(Apply(Select(Super(This(typeNames.EMPTY), typeNames.EMPTY), termNames.CONSTRUCTOR), List())), Literal(Constant(())))), DefDef(Modifiers(), TermName("name"), List(), List(), TypeTree(), Literal(Constant("Rose"))))))), Literal(Constant(())))
```

### Tree 순회
Tree으로부터 정보를 추출하는 것은 트리 순회를 통해 가능하며 두 가지 방법이 존재한다.

#### 패턴 매칭을 통한 순회
```scala
scala> import scala.reflect.runtime.universe._
import scala.reflect.runtime.universe._

scala> val tree = Apply(Select(Ident(TermName("x")), TermName("$plus")), List(Literal(Constant(2))))
tree: reflect.runtime.universe.Apply = x.$plus(2)

scala> val (fun, arg) = tree match {
     |   case Apply(fn, a :: Nil) => (fn, a)
     | }
fun: reflect.runtime.universe.Tree = x.$plus
arg: reflect.runtime.universe.Tree = 2

scala> val Apply(fun, arg :: Nil) = tree
fun: reflect.runtime.universe.Tree = x.$plus
arg: reflect.runtime.universe.Tree = 2
```

하지만 트리는 일반적으로 더 복잡할 수 있다. 
```scala
scala> val tree = Apply(Select(Apply(Select(Ident(TermName("x")), TermName("$plus")), List(Literal(Constant(2)))), TermName("$plus")), List(Literal(Constant(3))))
tree: reflect.runtime.universe.Apply = x.$plus(2).$plus(3)

scala> val Apply(fun, arg :: Nil) = tree
fun: reflect.runtime.universe.Tree = x.$plus(2).$plus
arg: reflect.runtime.universe.Tree = 3
```
중첩된 Tree를 순회하는 데에는 Traverser를 이용하는 것이 더 효율적일 수 있다.

#### Traverser를 통한 순회
복잡한 트리의 경우 트리의 깊이가 깊어지는데 이러한 트리를 순회하기 위해 패턴 매칭을 사용해야 한다면 모든 유형의 노드를 개별 처리해야 한다. 따라서 이러한 경우에는 Traverser 클래스를 사용한다.

Traverser를 사용하려면 Traverser의 traverse 메소드를 override 한다. 이렇게 하면 원하는 케이스만 추출해 낼 수 있습니다. 

```scala
scala> val tree = Apply(Select(Apply(Select(Ident(TermName("x")), TermName("$plus")), List(Literal(Constant(2)))), TermName("$plus")), List(Literal(Constant(3))))
tree: scala.reflect.runtime.universe.Apply = x.$plus(2).$plus(3)

scala> object traverser extends Traverser {
     |   var applies = List[Apply]()
     |   override def traverse(tree: Tree): Unit = tree match {
     |     case app @ Apply(fun, args) =>
     |       applies = app :: applies
     |       super.traverse(fun)
     |       super.traverseTrees(args)
     |     case _ => super.traverse(tree)
     |   }
     | }
defined module traverser

scala> traverser.traverse(tree)

scala> traverser.applies
res4: List[reflect.runtime.universe.Apply] = List(x.$plus(2), x.$plus(2).$plus(3))
```
