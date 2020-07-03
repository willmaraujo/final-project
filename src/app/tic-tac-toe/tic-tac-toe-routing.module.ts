import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeRoutingComponent } from './tic-tac-toe-routing.component';

export const DashboardRoutes: Routes = [
    {
        path: 'tictactoe',
        component: TicTacToeRoutingComponent,
        children: [
            {
                path: '',
                component: TicTacToeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(DashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TicTacToeRoutingModule { }
