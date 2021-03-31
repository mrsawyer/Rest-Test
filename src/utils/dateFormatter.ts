export function dateFormatter(value: string): string {
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    return formatter.format(new Date(value + 'T00:00:00'));
}
