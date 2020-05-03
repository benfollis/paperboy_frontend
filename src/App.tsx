import React from 'react';
import _ from 'lodash';
import Story from './Stories/Story';
import {Grid, Container} from '@material-ui/core';
import './App.css';
import { dataComparator } from "./utils/dataFunctions";
import TopStories from './data/Top_Stories.json'
// for now, just static load the data into a clone so we can play with it
const data = _.cloneDeep(TopStories);
data.sort(dataComparator);
const reversedData = _.reverse(data);
// sort te
function App() {
    return (
        <div className="App">
            <Container>
            <Grid
                container
                spacing={5}
            >
                {
                    reversedData.map((story) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                key={story.title}
                            >
                                <Story {...story} />
                            </Grid>
                        );
                    })
                }
            </Grid>
            </Container>
        </div>
    );
}

export default App;
