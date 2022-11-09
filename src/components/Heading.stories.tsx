import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem Ipsum.'

    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Medium: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
            asChild: {
                table: {
                    disable: true,
                }
            }
        }
    }
}