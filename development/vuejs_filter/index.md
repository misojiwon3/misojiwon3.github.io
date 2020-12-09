---
layout: default
type: post
category: development
title:  "VueJS Filters"
subtitle: "VueJS의 필터 사용법"
tag: "vuejs"
date: "2020-03-20"
---


### 기본 사항

- 일반적인 Text Formatting에 사용할 수 있는 필터를 정의할 수 있다
- mustache interpolation과 v-bind 에서 사용 가능하다
- 적용할 변수의 key 뒤에 pipe symbol 과 함께 사용한다

{% raw %}
```html
<!— in mustaches —>
{{ message | capitalize }}

<!— in v-bind —>
<div v-bind:id="rawId | formatId"></div>
```
{% endraw %}

### Declaration

- 컴포넌트의 로컬 필터로 정의

```jsx
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

- Vue instance가 생성되기 전에 전역적으로 정의

```jsx
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

### Usage

- 필터는 체인으로 사용 가능
{% raw %}
```html
{{ message | filterA | filterB }}
```
{% endraw %}

- 필터가 parameter를 입력받는 javascript 함수로 정의된 경우 다음과 같이 사용
{% raw %}
```html
{{ message | filterA(‘arg1’, arg2) }}
```
{% endraw %}