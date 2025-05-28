export interface IShuffledDeck {
    success: boolean,
    deck_id: string,
    shuffled: boolean,
    remaining: number
}

interface ICardOfDeck {
    code: string,
    image: string,
    images: {
        svg: string,
        png: string,
    },
    value: string,
    suit: string,
}

export interface IDeckOfCards extends Omit<IShuffledDeck, 'shuffled'> {
    cards: ICardOfDeck[],
}