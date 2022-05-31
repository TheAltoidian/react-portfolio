import React, { useEffect } from "react";

function Nav(props) {

    const {
        categories =[],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span>Cullen Casey's portfolio</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                            <a href={`#${category.name}`} onClick={() => {
                                setCurrentCategory(category)
                            }}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;