import Vue from 'vue';
import Foo from '../src/Foo.vue';

describe('Foo component', () => {
  let Comp;

  beforeEach(() => {
    Comp = Vue.extend(Foo);
  });

  it('should have "bar" as text content', () => {
    const vm = new Comp().$mount();
    expect(vm.$el.textContent).toEqual('bar');
  });
});
