<x-layout title="Adicionar Categoria">
    <x-header
        title="Adicionar Categoria"
    />

    <main>
        <form action="{{ route('categories.store') }}" method="post">
            @csrf

            <div>
                <label for="name">Nome</label>
                <input type="text" name="name" id="name">
            </div>

            <button type="submit">Adicionar</button>
        </form>
    </main>
</x-layout>