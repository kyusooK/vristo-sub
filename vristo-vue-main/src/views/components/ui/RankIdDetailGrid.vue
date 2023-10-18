<template>
    <div>
        <div class="label-title">{{label}}</div>
        <v-btn v-if="editMode" @click="append()">추가</v-btn>
        <v-btn v-if="editMode" @click="detailDeleteRow()">삭제</v-btn>
        <div class="table-responsive">
            <v-table v-if="!editMode">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>NAME</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(detailVal, idx) in selectedRow" :key="detailVal">
                        <td class="font-semibold">#{{ idx + 1 }}</td>
                        <td class="font-semibold">#{{detailVal.name}}</td>
                        <td class="whitespace-nowrap">{{detailVal.Address}}</td>
                        <td class="whitespace-nowrap"></td>
                    </tr>
                </tbody>
            </v-table>
            <v-table v-else>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>NAME</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(detailVal, idx) in selectedRow" :key="detailVal">
                        <td class="font-semibold">#{{ idx + 1 }}</td>
                        <td class="font-semibold">#{{detailVal.name}}</td>
                        <td class="whitespace-nowrap">{{detailVal.Address}}</td>
                        <td class="whitespace-nowrap"></td>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<script>
import BaseDetailGrid from '../base-ui/BaseDetailGrid';

export default {
    name: 'RankIdDetailGrid',
    mixins: [BaseDetailGrid],
    components: {
    },
    props: {
        label: String,
    },
    methods: {
    }
}
</script>

