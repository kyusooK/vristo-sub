<template>
    <div style="max-height:80vh;">
        <!-- Recent Transactions -->
        <div class="panel">
            <div class="gs-bundle-of-buttons" style="max-height:10vh;">
                <v-btn @click="addNewRow" @class="contrast-primary-text" small color="primary">
                    <v-icon small></v-icon>등록
                </v-btn>
            </div>
            <div class="mb-5 text-lg font-bold">Recent Transactions</div>
            <div class="table-responsive">
                <v-table>
                    <thead>
                        <tr >
                            <th>id</th>
                            <th>NAME</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, idx) in value" :key="val" @click="changeSelectedRow(val)">
                            <td class="font-semibold">#{{ idx + 1 }}</td>
                            <td class="font-semibold">#{{val.name}}</td>
                            <td class="whitespace-nowrap">{{val.Address}}</td>
                            <td class="whitespace-nowrap"></td>
                            <td class="whitespace-nowrap">
                                <Icon icon="mi:delete" @click="deleteRow(val)" />
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
        </div>
        <v-col>
            <v-dialog
                v-model="openDialog"
                transition="dialog-bottom-transition"
                width="35%"
            >
                <v-card>
                    <v-toolbar
                        color="primary"
                        class="elevation-0"
                        height="50px"
                    >
                        <div style="color:white; font-size:17px; font-weight:700;">Company 등록</div>
                        <v-spacer></v-spacer>
                        <v-icon
                            color="white"
                            small
                            @click="closeDialog()"
                        >mdi-close</v-icon>
                    </v-toolbar>
                    <v-card-text>
                        <Company :offline="offline"
                            :isNew="!value.idx"
                            :editMode="true"
                            v-model="newValue"
                            @add="append"
                        />
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-col>
        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                    width="332.5"
                    fullscreen
                    hide-overlay
                    transition="dialog-bottom-transition"
                >
                    <v-btn
                        style="position:absolute; top:2%; right:2%"
                        @click="closeDialog()"
                        depressed
                        icon 
                        absolute
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-dialog>
            </div>
        </v-col>
    </div>
</template>

<script>
import BaseGrid from '../base-ui/BaseGrid.vue'
import Company from './Company.vue';
import Rank from './Rank.vue';

export default {
    name: 'companyGrid',
    mixins:[BaseGrid],
    components:{
        Company,
        Rank
    },
    data: () => ({
        path: 'menus',
    }),
}
</script>