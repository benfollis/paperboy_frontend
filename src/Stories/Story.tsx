import React from 'react';
import { Card, Link, Typography } from "@material-ui/core";

interface StoryProps {
    title: string,
    links: string[],
    text: string,
}

function truncateBody(len: number, body: string): string {
    return body.substr(0, len);
}


function Story(props: StoryProps) {
    const { title, links, text} = props;

    return (
        <Card>
            <Typography>{title}</Typography>
            <Typography>{truncateBody(100, text)}</Typography>
            <Card>
                {
                    links.map((link) => {
                        return (
                            <Card key={link}>
                                <Link href={link}>
                                    {link}
                                </Link>
                            </Card>
                        );
                    })
                }
            </Card>
        </Card>
    );
}

export default Story;