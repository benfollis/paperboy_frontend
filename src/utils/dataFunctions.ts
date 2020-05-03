import _ from 'lodash';
interface SortStory {
    links: string[]
}

export function dataComparator(story: SortStory, anotherStory: SortStory): number {
    if (_.isEmpty(story)){
        if (_.isEmpty(anotherStory)){
            return 0;
        }
        return -1;
    }
    if (_.isEmpty(anotherStory)){
        return 1;
    }
    const { links: storyLinks } = story;
    const { links: anotherStoryLinks } = anotherStory;
    if (storyLinks.length < anotherStoryLinks.length) {
        return -1;
    }
    if (storyLinks.length > anotherStoryLinks.length) {
        return 1;
    }
    return 0;
}