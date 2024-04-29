module.exports = {
  env: {
    // 실행 환경 설정
    node: true,
    browser: true, // 브라우저 전역 변수 (예: window, document 등)에 대한 정의를 활성화
    es2021: true, // ECMAScript 2021 규격의 전역 변수 및 문법을 활성화
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  // 확장하려는 기본 설정
  // eslint:recommended: ESLinat에서 권장하는 기본 규칙 세트를 사용
  // plugin:react/recommended: React 플러그인에서 권장하는 규칙 세트를 사용
  overrides: [
    // 특정 파일 또는 파일 패턴에 대해 다른 ESLint 설정을 적용하려는 경우 사용
    {
      env: {
        node: true, // 오버라이드에서 적용할 환경 설정 : Node.js 환경을 활성화
      },
      files: ['.eslintrc.{js,cjs}'], // 오버라이드가 적용될 파일 또는 파일 패턴의 배열 : .eslintrc.{js,cjs} 파일에만 오버라이드 설정이 적용
      parserOptions: {
        sourceType: 'script', // 오버라이드에서 사용할 파서 옵션 : sourceType을 "script"로 설정
      },
    },
  ],
  parserOptions: {
    // 파서 옵션을 설정
    ecmaVersion: 'latest', // ECMAScript 버전, "latest" : 최신 버전
    sourceType: 'module', // 스크립트의 모듈 타입, "module" : ES6+ 모듈
  },
  plugins: ['react'], // ESLint에 react 플러그인 추가
  rules: {
    'react/react-in-jsx-scope': 'off', // React 변수가 JSX 스코프 내에 있어야 하는 규칙을 비활성화
    'react/prop-types': 'off', // React 컴포넌트의 prop 유형 검사 규칙을 비활성화
    'no-unused-vars': 'off', // 사용되지 않은 변수에 대한 경고를 비활성화
  },
};
