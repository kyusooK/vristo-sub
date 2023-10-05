<template>
    <div style="max-height:80vh;">
        <!-- Recent Transactions -->
        <div class="panel">
            <MyComponent v-model="newValue"></MyComponent>
            <div class="gs-bundle-of-buttons" style="max-height:10vh;">
                <v-btn @click="addNewRow" @class="contrast-primary-text" small color="primary">
                    <v-icon small>mdi-plus-circle-outline</v-icon>등록
                </v-btn>
                <v-btn  @click="editSelectedRow" class="contrast-primary-text" small color="primary" >
                    <v-icon small>mdi-pencil</v-icon>수정
                </v-btn>
                <v-btn @click="deleteSelectedRows" class="contrast-primary-text" small color="primary">
                    <v-icon small>mdi-minus-circle-outline</v-icon>삭제
                </v-btn>
            </div>
            <div class="mb-5 text-lg font-bold">Recent Transactions</div>
            <div class="table-responsive">
                <v-table>
                    <thead>
                        <tr >
                            <th class="ltr:rounded-l-md rtl:rounded-r-md">{{val}}</th>
                            <th>name</th>
                            <th>NAME</th>
                            <th>AMOUNT</th>
                            <th class="text-center ltr:rounded-r-md rtl:rounded-l-md">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="val in list" :key="val">
                            <td class="font-semibold">#{{val.name}}</td>
                            <td class="whitespace-nowrap">{{val.rankId}}</td>
                            <td class="whitespace-nowrap">{{val.file}}</td>
                            <td>$1,358.75</td>
                            <td class="text-center">
                                <span class="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
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
                        <Rank :offline="offline"
                            :isNew="!itemToEdit"
                            :editMode="true"
                            v-model="newValue"
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
import BaseGrid from './components/base-ui/BaseGrid.vue'
import Rank from './Rank.vue';

export default {
    name: 'rankGrid',
    mixins:[BaseGrid],
    components:{
        Rank,
    },
    data: () => ({
        path: 'menus',
    }),
}
</script>