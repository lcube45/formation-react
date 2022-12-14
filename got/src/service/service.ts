import Person from "./model";
import axios from "axios";

class Service {
    persons: Person[] = [
        { id: 1, 'name': 'james', 'img': 'https://picsum.photos/100/100?random=1', 'title': 'lord', 'biography': 'lorem ipsum' },
        { id: 2, 'name': 'john', 'img': 'https://picsum.photos/100/100?random=2', 'title': 'king', 'biography': 'lorem ipsum' },
    ];

    addPerson(item: any): void {
        this.persons.push({
            'id': 1,
            'name': item.name,
            'img': item.img,
            'title': 'lord',
            'biography': 'lorem ipsum'
        })
    }

    fetchPersons(): Array<Person> {

        let persons: Array<Person> = []

        axios.get('https://thronesapi.com/api/v2/Characters')
        .then(response => {
            persons =  response.data.map((item: any) => ({
                    id: item.id,
                    name: item.firstName,
                    img: item.imageUrl,
                    title: item.title,
                    biography: item.family
            }))
        })
        .catch(error => {
            console.log(error)
        })
        
        return persons
    }
}

export default Service;