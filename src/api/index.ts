export type ListItem = {
    id: number,
    name: string,
}

export function getList(): Promise<ListItem[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: 'name1'},
                {id: 2, name: 'name2'},
                {id: 3, name: 'name3'},
            ])
        }, 3000)
    })
}