<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto'; 

    let { data } = $props();

    let totalBooks = data.totalBooks;
    let statusCounts = data.statusCounts;
    let avgRating = data.avgRating;
    let genreCounts = data.genreCounts;
    let favoriteAuthor = data.favoriteAuthor;

    let chartInstance; // → um Chart später zu zerstören

    onMount(() => {
        const ctx = document.getElementById('genreChart').getContext('2d');

        // Falls es schon einen Chart gibt → zerstören (sonst Doppel-Init bei Page Change!)
        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(genreCounts),
                datasets: [{
                    label: 'Books per Genre',
                    data: Object.values(genreCounts),
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        precision: 0
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutBounce'
                }
            }
        });
    });
</script>


<h1>Dashboard</h1>

<!-- Cards -->
<div class="row">
    <div class="col-md-6 mb-4">
        <div class="card bg-dark text-white p-3 h-100">
            <h4>Total Books</h4>
            <p class="display-4">{totalBooks}</p>
        </div>
    </div>

    <div class="col-md-6 mb-4">
        <div class="card bg-dark text-white p-3 h-100">
            <h4>Status Counts</h4>
            <ul>
                <li>📚 Read: {statusCounts.read}</li>
                <li>📝 Planned: {statusCounts.planned}</li>
                <li>📖 Reading: {statusCounts.reading}</li>
            </ul>
        </div>
    </div>

    <div class="col-md-6 mb-4">
        <div class="card bg-dark text-white p-3 h-100">
            <h4>Average Rating</h4>
            <p class="display-4">{avgRating}</p>
        </div>
    </div>

    <div class="col-md-6 mb-4">
        <div class="card bg-dark text-white p-3 h-100">
            <h4>Favorite Author</h4>
            <p class="display-5">{favoriteAuthor}</p>
        </div>
    </div>
</div>

<!-- Genres Chart -->
<h2 class="mt-5 mb-3">📚 Genres (Bar Chart)</h2>
<canvas id="genreChart" style="max-width: 800px;"></canvas>
