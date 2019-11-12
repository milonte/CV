<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProjectRepository;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig');
    }

     /**
     * @Route("/data/projects", name="data")
     */
    public function dataAction(ProjectRepository $projectRepository)
    {

        $result = [];
        foreach ($projectRepository->findAll() as $project) {
            $result[] = [
                'id' => $project->getId(),
                'name' => $project->getName(),
                'description' => $project->getDescription(),
                'date' => $project->getDate(),
                'pictures' => $project->getPictures(),
            ];
        }

        return new JsonResponse($result);
    }

}
