# bb-vue-library

[![build status](https://img.shields.io/travis/openbox/bb-vue-library.svg)](https://travis-ci.org/openbox/bb-vue-library)
[![coverage](https://img.shields.io/codecov/c/github/openbox/bb-vue-library.svg)](https://codecov.io/gh/openbox/bb-vue-library)
[![npm version](http://img.shields.io/npm/v/@openbox/bb-vue-library.svg)](https://npmjs.org/package/@openbox/bb-vue-library)

This is an example repository for a simple vue library.


## Install

```bash
npm install @openbox/bb-vue-library
```


## Usage

```html
<!-- .vue file -->
<template>
  <Foo />
</template>
<script>
  import { Foo } from '@openbox/bb-vue-library';

  export default {
    components: { Foo },
  }
</script>
```
