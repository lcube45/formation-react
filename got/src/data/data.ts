import Character from "./model";

class Data {
    persons: Character[] = [
        { 'id': 1, 'name': 'james', 'img': 'https://picsum.photos/100/100?random=1', 'title': 'lord', 'biography': 'lorem ipsum' },
        { 'id': 2, 'name': 'john', 'img': 'https://picsum.photos/100/100?random=2', 'title': 'king', 'biography': 'lorem ipsum' },
        { 'id': 3, 'name': 'henry', 'img': 'https://picsum.photos/100/100?random=3', 'title': 'queen', 'biography': 'lorem ipsum' },
    ];

    addPerson(item: any): void {
        this.persons.push({
            'id': item.id,
            'name': item.name,
            'img': item.img,
            'title': 'lord',
            'biography': 'lorem ipsum'
        })
    }
}

export default Data;