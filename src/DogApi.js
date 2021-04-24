import axios from 'axios'

export function getAllDogNamesList() {
    return axios.get(`https://dog.ceo/api/breeds/list/all`);
}

export function getDogRandomImage(BreedName) {
    return axios.get(`https://dog.ceo/api/breed/${BreedName}/images/random`);
}

export function getDogImageURLs(BreedName) {
    return axios.get(`https://dog.ceo/api/breed/${BreedName}/images`);
}

export function getSubBreedList(BreedName) {
    return axios.get(`https://dog.ceo/api/breed/${BreedName}/list`);
}