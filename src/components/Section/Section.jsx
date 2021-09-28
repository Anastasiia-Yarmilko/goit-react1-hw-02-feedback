export function Section(title, children, className) {
    return (
        <div>
            <h2>{title}</h2>
            <section className={className}>
                {children}
            </section>
        </div>
    );
}