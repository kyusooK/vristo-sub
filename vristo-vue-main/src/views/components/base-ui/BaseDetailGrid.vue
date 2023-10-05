<template>
    <div></div>
</template>
 
<script>
import { ref, defineProps, defineEmits } from 'vue';
import BaseGrid from './BaseGrid.vue';

export default {
    name: 'BaseDetailGrid',
    extends: BaseGrid,
    
    setup(props) {
        const emit = defineEmits();
        const value = ref(props.value || []);

        const detailDeleteRow = () => {
        const flexGridDetails = $refs.flexGridDetails;
        const view = flexGridDetails.collectionView;
        const selectedIndex = view.currentPosition;

        if (selectedIndex !== -1) {
            view.remove(view.currentItem);
            emit('update:value', view.sourceCollection);
        }
        };

        return {
        value,
        detailDeleteRow
        };
    }
};
</script>
 
 