import {IDeckOfCards, IShuffledDeck} from "./types";

const fetchShuffledDeck = async (): Promise<IShuffledDeck> => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    return res.json();
}

const fetchDeckOfCards = async ({ deck_id, remaining }: Omit<IShuffledDeck, 'shuffled' | 'success'>): Promise<IDeckOfCards> => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${remaining}`)
    return res.json();
}

export const getDeckOfCards = async () => {
    try {
        const shuffledDeck = await fetchShuffledDeck();
        const deckOfCards = await fetchDeckOfCards({ deck_id: shuffledDeck.deck_id, remaining: shuffledDeck.remaining });

        return deckOfCards.cards;
    } catch (error) {
        return new Error('Ошибка получения карточек');
    }
}