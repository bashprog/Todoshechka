import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

interface item {
    id: string,
    title: string,
    status: 'clear' | 'done' | 'canceled',
}

interface CardStore {
    items: item[],
    addItem: (title: string) => void,
    deleteItem: (id: string) => void,
    changeStatus: (id: string) => void,
}

export const useCardStore = create<CardStore>()(devtools((set) => ({
    items: [],
    addItem: title => set(state => ({
        items: [...state.items, {id: `${Math.random()}`, title: title, status: 'clear'}]
    })),
    deleteItem: id => set(state => ({
        items: [...state.items.filter(el => el.id !== id)]
    })),
    changeStatus: id => set(state => ({
        items: [...state.items.filter(el => {
            if (el.id === id) {
                switch (el.status) {
                    case "clear":
                        el.status = 'done';
                        break;
                    case "done":
                        el.status = 'canceled';
                        break;
                    case "canceled":
                        el.status = 'clear';
                        break;
                }
            }
            return el;
        })]
    }))
})));