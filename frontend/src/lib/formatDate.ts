export function formatTimeAgo(date: Date): string {
    const dateObj = date instanceof Date ? date : date ? new Date(date) : null;

    if (!dateObj || isNaN(dateObj.getTime())) {
        return '';
    }

    const now = new Date();
    const diffMs = now.getTime() - dateObj.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffYear > 0) {
        return `${diffYear} year${diffYear > 1 ? 's' : ''} ago`;
    } else if (diffMonth > 0) {
        return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;
    } else if (diffDay > 0) {
        return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
    } else if (diffHour > 0) {
        return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
    } else if (diffMin > 0) {
        return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now';
    }
}

export function formatViews(views: number): string {
    if (views >= 1_000_000_000) {
        return (views / 1_000_000_000).toFixed(1) + 'B';
    } else if (views >= 1_000_000) {
        return (views / 1_000_000).toFixed(1) + 'M';
    } else if (views >= 1_000) {
        return (views / 1_000).toFixed(1) + 'K';
    } else {
        return views.toString();
    }
}