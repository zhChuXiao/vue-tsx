import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  setup() {
    console.log('setup');
    const store = useStore();

    return () => (
      <>
        <h1>Home</h1>
        <h1>{store.state.title}</h1>
      </>
    );
  },
});
