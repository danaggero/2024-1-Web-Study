a. 
JavaScript가 DOM에 어떻게 접근하고 적용될까?

: DOM (Document Object Model)이란 웹 브라우저에 내장된 API 중에 하나로, HTML과 CSS를 조작하여 HTML을 생성, 제거 및 변경하고 페이지에 새 스타일을 동적으로 적용하는 등의 작업을 수행합니다. 
브라우저에서 웹 페이지를 로드하면 실행 환경(브라우저 탭) 내에서 코드(HTML, CSS 및 JavaScript)를 실행하게 됩니다.
JavaScript는 document.getElementById(), document.getElementsByClassName() 와 같은 메서드를 통해 DOM 에 접근하고 받은 데이터를 적용시켜 DOM 요소를 동적으로 변경합니다.

b. 
브라우저를 이루는 컴포넌트 중, JavaScript Engine은 무엇이고 어떤 일을 할까?

: JavaScript Engine은 웹 브라우저 내의 컴포넌트입니다. 엔진에 의한 인터프리터 방식이므로 별도의 컴파일 과정이 필요 없습니다. (즉, 웹브라우저에서 즉시 해석되어 실행됨 = 런타임)
이 엔진은 웹 페이지의 스크립트를 읽어들여, 브라우저가 이해할 수 있는 저수준 언어로 변환하고, 결과적으로 사용자 인터페이스의 동작, 이벤트 처리, DOM 조작 등을 가능하게 합니다.

c.
inline CSS가 항상 좋은 것일까? 아니라면 그 이유는 무엇일까?

: inline CSS 는 유지보수가 어렵다는 단점이 있습니다.