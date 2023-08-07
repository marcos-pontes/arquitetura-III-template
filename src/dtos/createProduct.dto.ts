import z from "zod"

export interface CreateProductInputDTO{
        id?: string,
        name?: string,
        price?: number
}

export interface CreateProductoutputDTO{
        message: string;
        product: {
            id: string;
            name: string;
            price: number;
            createdAt: string;
        };
}

export const CreateProducSchema = z.object({
    id: z.string().min(1).optional(),
    name: z.string().min(2).optional(),
    price: z.number().gt(0).optional()
}).transform(data => data as CreateProductInputDTO);