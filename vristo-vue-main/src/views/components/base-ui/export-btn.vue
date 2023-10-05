<template>
    <v-btn class="btn btn-default btn-block" :disabled="preparing" @click="exportToExcel" small color="primary">
        <v-icon v-if="!exporting" small>mdi-download</v-icon>엑셀
    </v-btn>
</template>

<script>
import BaseGrid from './BaseGrid.vue';
import { ref } from 'vue';

export default {
    mixins: [BaseGrid],
    props: ['exportService', 'getFlex'],
    setup(props) {
        const preparing = ref(false);
        const exporting = ref(false);
        const progress = ref(0);

        const exportToExcel = () => {
        const exportService = props.exportService;

        const resetState = () => {
            preparing.value = false;
            exporting.value = false;
            progress.value = 0;
        };

        if (!preparing.value && !exporting.value) {
            preparing.value = true;

            exportService.startExcelExport(
                props.getFlex(),
                () => {
                    console.log('Export to Excel completed');
                    resetState();
                },
                (err) => {
                    console.error(`Export to Excel failed: ${err}`);
                    resetState();
                },
                (prg) => {
                    preparing.value = false;
                    exporting.value = true;
                    progress.value = prg;
                }
            );
            console.log('Export to Excel started');
        } else {
                exportService.cancelExcelExportAsync(() => {
                console.log('Export to Excel canceled');
                resetState();
            });
        }
        };

        const percent = (value) => {
            return `${Math.ceil(value)}%`;
        };

        return {
            preparing,
            exporting,
            progress,
            exportToExcel,
            percent,
        };
    },
};
</script>
